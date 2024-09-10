import { JSDOM } from 'jsdom';

export async function scrapeWordOfTheDay() {
  try {
    const response = await fetch('https://www.merriam-webster.com/word-of-the-day', { next: { revalidate: 86400 } });
    const html = await response.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const dictionaryLink = doc.querySelector('.see-entry-header a')?.href;


    
    const contextSection = doc.querySelector('.wod-article-container .lr-container');
    const context = contextSection ? contextSection.textContent.trim() : 'No context available';

    return { html, dictionaryLink, context };
  } catch (error) {
    console.error('Error fetching Word of the Day:', error);
    return null;
  }
}

export async function scrapeDictionaryPage(url) {
  try {
    const response = await fetch(url, { next: { revalidate: 86400 } });
    const html = await response.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    return {
      word: doc.querySelector('.hword')?.textContent?.trim() || 'N/A',
      pronunciation: doc.querySelector('.prs')?.textContent?.trim() || 'N/A',
      partOfSpeech: doc.querySelector('.important-blue-link')?.textContent?.trim() || 'N/A',
      definition: doc.querySelector('.dtText')?.textContent?.trim() || 'N/A',
      example: doc.querySelector('.ex-sent')?.textContent?.trim() || 'N/A',
    };
  } catch (error) {
    console.error('Error fetching dictionary page:', error);
    return null;
  }
}