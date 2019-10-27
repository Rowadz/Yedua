import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { get } from 'request-promise';
import { load } from 'cheerio';
import { DomScraper } from '../composers/index';
const router = Router();

router.get('/this', async (req: Request, res: Response) => {
  try {
    const $: CheerioStatic = load(
      await get('https://en.wikipedia.org/wiki/How_to_Solve_It')
    );
    const domScraper = new DomScraper($);
    const data = [
      {
        name: 'Parent',
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
