import React from "react";
import BaseLayout from "../layouts/Base";
import Image from "gatsby-image";
import Slider from "react-slick";
import { Link } from "gatsby";
import { locLang } from "../../utils";
import Chip from "@material-ui/core/Chip";
import { FormattedMessage } from "react-intl";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import PrevIcon from "@material-ui/icons/KeyboardArrowLeft";
import Button from "@material-ui/core/Button";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextIcon
      className={className}
      style={{ ...style, display: "block", color: "grey" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevIcon
      className={className}
      style={{ ...style, display: "block", color: "grey" }}
      onClick={onClick}
    />
  );
}

const HomePage = props => {
  const showcases = props.pageContext.data.allMarkdownRemark.edges.slice(0, 10);
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <BaseLayout>
      <h1>Heading 1</h1>
      <p>Heading 6 (this is just text)</p>
      <h2>Heading 2</h2>
      <p>Heading 6 (this is just text)</p>
      <h3>Heading 3</h3>
      <p>Heading 6 (this is just text)</p>
      <h4>Heading 4</h4>
      <p>Heading 6 (this is just text)</p>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Heading 6 (this is just text)</p>

      <Button
        className="mr1 btn1"
        href="/signup"
        color="primary"
        variant="contained"
      >
        link button
      </Button>
      <Button
        className="mr1 btn2"
        href="/signup"
        color="secondary"
        variant="contained"
      >
        link button
      </Button>
      <Button className="mr1 btn1" color="primary" variant="contained">
        click button
      </Button>
      <Button className="btn2" color="secondary" variant="contained">
        click button
      </Button>

      <h2>
        <FormattedMessage id="app.showcase" />
      </h2>
      <Slider {...settings}>
        {showcases.map((showcase, index) => {
          let frontmatter = showcase.node.frontmatter;
          let img = frontmatter.img.childImageSharp.fixed;
          return (
            <div
              style={{ width: 20 + img.width }}
              className="txt-center"
              key={"showcase-" + index}
            >
              <Link
                to={locLang.set(frontmatter.path, props.pageContext.language)}
              >
                <Image
                  key={"showcase-" + index}
                  fixed={frontmatter.img.childImageSharp.fixed}
                  title={frontmatter.caption}
                  alt={frontmatter.caption}
                  backgroundColor={"#212121"}
                  className="slide"
                />
              </Link>
              {frontmatter.patterns.map((pattern, pindex) => {
                return (
                  <Link
                    to={locLang.set(
                      "/patterns/" + pattern,
                      props.pageContext.language
                    )}
                    key={"showcase-" + index + "-link-" + pindex}
                  >
                    <Chip
                      color="primary"
                      variant="outlined"
                      label={pattern}
                      clickable={true}
                      className="slick-chip"
                    />
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div style={{ width: "240" }} className="txt-center slide slide-card">
          <Link to={locLang.set("/showcase", props.pageContext.language)}>
            <h3 className="px1">
              <FormattedMessage id="app.browseAllShowcases" />
            </h3>
            <span className="fs-block-link" />
          </Link>
        </div>
      </Slider>
    </BaseLayout>
  );
};

export default HomePage;
