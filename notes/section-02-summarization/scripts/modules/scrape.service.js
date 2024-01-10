import { extract } from '@extractus/article-extractor';

export class ScrapeService {
  static scrape(url) {
    return extract(url)
  }
}