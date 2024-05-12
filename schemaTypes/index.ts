import blockContent from "./blockContent";
import blog from "./blog";
import blogPosts from "./blogPosts";
import contentBlock from "./mainBlogBlock";
import footer from "./footer";
import header from "./header";
import localizedSlug from "./localizedSlug";
import mainPage from "./mainPage";
import textImageBlock from "./textImageBlock";
import doubleTextBlock from "./doubleTextBlock";
import blockContentWithStyle from "./blockContentWithStyle";

export const schemaTypes = [
  header,
  mainPage,
  localizedSlug,
  blog,
  blogPosts,
  blockContent,
  contentBlock,
  textImageBlock,
  doubleTextBlock,
  blockContentWithStyle,
  footer
]
