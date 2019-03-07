import React from "react";
import BaseLayout from "../layouts/Base";
import Grid from "@material-ui/core/Grid";
import Image from "gatsby-image";
import PleaseTranslate from "../PleaseTranslate";
import LanguageNotAvailable from "../LanguageNotAvailable";
import Datum from "../Datum";
import Breadcrumbs from "../Breadcrumbs";
import GithubIcon from "../GithubIcon";
import { locLang, fileOnGithub, editLink } from "../../utils";
import { Link } from "gatsby";
import EditIcon from "@material-ui/icons/Edit";

export default data => {
  const { language, post, location } = data.pageContext;
  const { frontmatter, html, fileAbsolutePath } = post;

  let languageNotAvailable = "";
  let pleaseTranslate = "";
  if (language !== post.language) {
    languageNotAvailable = <LanguageNotAvailable language={language} />;
    pleaseTranslate = (
      <PleaseTranslate filePath={fileAbsolutePath} language={language} />
    );
  }
  return (
    <BaseLayout>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Breadcrumbs via={[{ link: "/showcase", label: "app.showcase" }]}>
            {frontmatter.title}
          </Breadcrumbs>
          <ul className="meta">
            <li>
              <Datum date={frontmatter.date} />
            </li>
            {frontmatter.patterns.map((pattern, index) => {
              return (
                <li>
                  <Link
                    to={locLang.set("/showcase/category/" + pattern, language)}
                  >
                    #{pattern}
                  </Link>
                </li>
              );
            })}
          </ul>
          <figure>
            <Image
              fluid={frontmatter.img.childImageSharp.fluid}
              title={frontmatter.caption}
              alt={frontmatter.caption}
              backgroundColor={"#212121"}
              className="overpad1"
            />
            <figcaption
              dangerouslySetInnerHTML={{ __html: frontmatter.caption }}
            />
          </figure>
        </Grid>
        <Grid item xs={12} sm={10} md={6} lg={3} xl={4} />
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        wrap="wrap-reverse"
      >
        <Grid item xs={12} sm={10} md={7} lg={6} xl={6}>
          <h1>
            {frontmatter.title}
            &nbsp;&nbsp;
            <Link to={editLink(location)}>
              <EditIcon />
            </Link>
            &nbsp;&nbsp;
            <a href={fileOnGithub(fileAbsolutePath)}>
              <GithubIcon color={"#2979ff"} />
            </a>
          </h1>
          <article dangerouslySetInnerHTML={{ __html: html }} />
          {pleaseTranslate}
        </Grid>
        <Grid item xs={false} sm={false} md={false} lg={1} xl={1} />
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          lg={5}
          xl={4}
          className="align-self-stretch pl1nsm"
        >
          {languageNotAvailable}
        </Grid>
      </Grid>
    </BaseLayout>
  );
};
