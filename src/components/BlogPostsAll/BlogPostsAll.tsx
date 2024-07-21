// components/BlogPostsAll.tsx
import React from "react";
import styles from "./BlogPostsAll.module.scss";
import { Blog } from "@/types/blog";
import BlogPostFull from "../BlogPostFull/BlogPostFull";
import BlogPostStandard from "../BlogPostStandard/BlogPostStandard";
import BlogPostMiddle from "../BlogPostMiddle/BlogPostMiddle";

const colorSchemes = [
  { bgColor: "#F1BE54", textColor: "#163E5C" },
  { bgColor: "#F1BE54", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#F6F6F5", textColor: "#163E5C" },
  { bgColor: "#163E5C", textColor: "#F6F6F5" },
  { bgColor: "#F1BE54", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#163E5C", textColor: "#F6F6F5" },
  { bgColor: "#F1BE54", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#F1BE54", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#F6F6F5", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#163E5C", textColor: "#F6F6F5" },
  { bgColor: "#D0C6BE", textColor: "#163E5C" },
  { bgColor: "#F6F6F5", textColor: "#163E5C" },
];

type Props = {
  blogPosts: Blog[];
};

const BlogPostsAll: React.FC<Props> = ({ blogPosts }) => {
  let index = 0;
  let colorIndex = 0;
  let shouldAlternate = false; // Start with blogPostStandard

  return (
    <section className={styles.blogPostAll}>
      <div className="container">
        <h2 className="h2-main mb70">Блог о психологии</h2>
        <div className={styles.blogPosts}>
          {(() => {
            const content = [];
            while (index < blogPosts.length) {
              const post = blogPosts[index];
              const { bgColor, textColor } =
                colorSchemes[colorIndex % colorSchemes.length];
              const postProps = { ...post, bgColor, textColor };

              if (index === 0) {
                content.push(
                  <div key={post._id} className={styles.blogPostFull}>
                    <BlogPostFull {...postProps} />
                  </div>
                );
                index++;
                colorIndex++;
                continue;
              }

              if (shouldAlternate) {
                const nextPost = blogPosts[index + 1];
                if (nextPost) {
                  const nextPostProps = {
                    ...nextPost,
                    bgColor:
                      colorSchemes[(colorIndex + 1) % colorSchemes.length]
                        .bgColor,
                    textColor:
                      colorSchemes[(colorIndex + 1) % colorSchemes.length]
                        .textColor,
                  };
                  content.push(
                    <div
                      key={`${post._id}-${nextPost._id}`}
                      className={styles.blogPostRow}
                    >
                      <div className={styles.middlePost}>
                        <BlogPostMiddle {...postProps} />
                      </div>
                      <div className={styles.standardPost}>
                        <BlogPostStandard {...nextPostProps} />
                      </div>
                    </div>
                  );
                  index += 2;
                  colorIndex += 2;
                } else {
                  content.push(
                    <div key={post._id} className={styles.blogPostMiddle}>
                      <BlogPostMiddle {...postProps} />
                    </div>
                  );
                  index++;
                  colorIndex++;
                }
              } else {
                const nextPost1 = blogPosts[index + 1];
                const nextPost2 = blogPosts[index + 2];
                content.push(
                  <div key={post._id} className={styles.blogPostStandard}>
                    <BlogPostStandard {...postProps} />
                  </div>
                );
                index++;
                colorIndex++;
                if (nextPost1) {
                  const nextPost1Props = {
                    ...nextPost1,
                    bgColor:
                      colorSchemes[colorIndex % colorSchemes.length].bgColor,
                    textColor:
                      colorSchemes[colorIndex % colorSchemes.length].textColor,
                  };
                  content.push(
                    <div
                      key={nextPost1._id}
                      className={styles.blogPostStandard}
                    >
                      <BlogPostStandard {...nextPost1Props} />
                    </div>
                  );
                  index++;
                  colorIndex++;
                }
                if (nextPost2) {
                  const nextPost2Props = {
                    ...nextPost2,
                    bgColor:
                      colorSchemes[colorIndex % colorSchemes.length].bgColor,
                    textColor:
                      colorSchemes[colorIndex % colorSchemes.length].textColor,
                  };
                  content.push(
                    <div
                      key={nextPost2._id}
                      className={styles.blogPostStandard}
                    >
                      <BlogPostStandard {...nextPost2Props} />
                    </div>
                  );
                  index++;
                  colorIndex++;
                }
              }
              shouldAlternate = !shouldAlternate; // Alternate the flag
            }
            return content;
          })()}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsAll;
