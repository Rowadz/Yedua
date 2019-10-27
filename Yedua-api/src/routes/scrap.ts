import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { get } from 'request-promise';
import { load } from 'cheerio';
import { DomScraper } from '../composers/index';
import { Lvl } from 'src/models';
import isUrl from 'is-url';
// tslint:disable-next-line: no-var-requires
const extractDomain = require('extract-domain');

const router = Router();

router.get('/this/:url/:lvl', async (req: Request, res: Response) => {
  try {
    const { url, lvl } = req.params;
    if (!url && !lvl) {
      throw new Error('Please provide a level and a url');
    }

    if (!['1', '2', '∞'].includes(lvl)) {
      throw new Error('Please provide a level [1, 2, ∞]');
    }

    if (!isUrl(url)) {
      throw new Error('Please provide a valid url');
    }

    console.log(lvl, url, isUrl(url));

    const $: CheerioStatic = load(await get(url));
    const domScraper = new DomScraper($);
    const data = [
      {
        name: extractDomain(url),
        children: domScraper.init(lvl as Lvl)
      }
    ];
    return res.status(OK).json(data);
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

export default router;
