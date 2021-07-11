import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles : Article[] = data.map((cur): Article => new Article(cur.title, cur.description, cur.author, cur.imageUrl));
        return articles;
    }
}