import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { get } from 'request-promise';
import { load } from 'cheerio';
import { DomScraper } from '../composers/index';
// tslint:disable-next-line: no-var-requires
const extractDomain = require('extract-domain');

const router = Router();

router.get('/this/:url', async (req: Request, res: Response) => {
  try {
    const { url } = req.params;
    console.log(req.params);
    // const domain = 'https://mohammedal-rowad.github.io/iota/';
    const $: CheerioStatic = load(await get(url));
    const domScraper = new DomScraper($);
    const data = [
      {
        name: extractDomain(url),
        children: domScraper.init()
      }
    ];
    return res.status(OK).json(data);
  } catch (err) {
    // logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

export default router;
