import React from "react";
import { connect } from "react-redux";
import { showNotification } from "../../../store/actions/notification";
import { setGist } from "../../../store/actions/gist";
import { setDrafts } from "../../../store/actions/drafts";
import { injectIntl } from "react-intl";
import TwoColumns from "../../TwoColumns";
import Column from "../../Column";
import Drawers from "../../Drawers";
import Center from "../../Center";
import Spinner from "../../Spinner";
import { locLang } from "../../../utils";
import DraftPreview from "./DraftPreview";
import OptionDocs from "./options/Docs";
import Gist from "./Gist";
import Export from "./Export";
import backend from "../../../apis/backend";
import { navigate } from "gatsby";
import LayoutBuilder from "./LayoutBuilder";
import draftSettings from "../../../config/draftsettings";
import OptionsIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsPicker from "../draft/SettingsPicker";
import ActionsIcon from "@material-ui/icons/Directions";
import Actions from "./actions/Container";

class DraftContainer extends React.Component {
  state = {
    dflts: {
      embed: true,
      sa: 0,
      complete: true,
      options: {},
      paperless: false,
      locale: this.props.language,
      units: this.props.user.settings.units,
      margin: this.props.user.settings.units === "imperial" ? 2.38125 : 2,
      auto: true
    },
    display: "draft",
    docs: false,
    format: "",
    gist: this.props.gist
  };

  updateDisplay = (key, data = null) => {
    switch (key) {
      case "docs":
        this.setState({ display: "docs", docs: data });
        break;
      default:
        this.setState({ display: key });
    }
  };

  updateOption = (key, val) => {
    if (val === "true") val = true;
    else if (val === "false") val = false;
    else if (typeof val === "number") val = Math.round(val * 1000) / 1000;
    let gist = this.state.gist;
    if (Object.keys(draftSettings.config).indexOf(key) === -1)
      gist.settings.options[key] = val;
    else gist.settings[key] = val;
    this.setState({ gist, display: "draft" });
  };

  updateMeasurements = measurements => {
    let gist = this.state.gist;
    gist.settings.measurements = measurements;
    this.setState({ gist, display: "draft" });
  };

  clearGist = () => {
    this.props.setGist(false);
  };

  exportGist = format => {
    this.setState({ display: "gist", format });
  };

  saveDraft = () => {
    backend
      .createDraft({ gist: this.state.gist })
      .then(res => {
        if (res.status === 200) {
          this.props.setDrafts(res.data.drafts);
          this.props.showNotification(
            "success",
            this.props.intl.formatMessage(
              { id: "app.fieldSaved" },
              { field: this.props.intl.formatMessage({ id: "app.draft" }) }
            )
          );
          navigate(
            locLang.set("/drafts/" + res.data.handle, this.props.language)
          );
        }
      })
      .catch(err => {
        console.log("nope", err);
        this.props.showNotification("error", err);
        return false;
      });
  };

  exportDraft = format => {
    this.setState({ gist: this.state.gist, display: "export", format });
  };

  optionDocsNode = () => {
    if (this.state.display !== "docs") return false;
    if (Object.keys(draftSettings.config).indexOf(this.state.docs) !== -1) {
      // Draft setting
      let nodePath = "/docs/draft/settings/" + this.state.docs.toLowerCase();
      if (typeof this.props.data.settingsHelp[nodePath] === "undefined")
        return false;
      else return this.props.data.settingsHelp[nodePath];
    } else {
      // Pattern option
      let nodePath =
        "/docs/patterns/" +
        this.state.gist.pattern +
        "/options/" +
        this.state.docs.toLowerCase();
      if (typeof this.props.data.optionsHelp[nodePath] === "undefined")
        return false;
      else return this.props.data.optionsHelp[nodePath];
    }
  };

  getDrawers = () => {
    let gist = this.state.gist ? this.state.gist : this.props.gist;
    let pickerProps = {
      language: this.props.language,
      patternInfo: this.props.patternInfo,
      gist,
      display: this.state.display,
      units: "metric",
      methods: {
        updateDisplay: this.updateDisplay,
        updateOption: this.updateOption,
        updateMeasurements: this.updateMeasurements,
        clearGist: this.clearGist
      }
    };
    return {
      options: {
        config: {
          title: "app.patternOptions",
          icon: <OptionsIcon />
        },
        content: (
          <div className="overpad2-always">
            <SettingsPicker {...pickerProps} mode="pattern" />
          </div>
        )
      },
      settings: {
        config: {
          title: "app.draftSettings",
          icon: <SettingsIcon />
        },
        content: (
          <div className="overpad2-always">
            <SettingsPicker {...pickerProps} mode="draft" />
          </div>
        )
      },
      actions: {
        config: {
          title: "app.actions",
          icon: <ActionsIcon />
        },
        content: (
          <div className="overpad2-always">
            <Actions
              gist={gist}
              language={this.props.language}
              units={this.props.user.settings.units}
              patron={this.props.user.patron}
              patternInfo={this.props.patternInfo}
              saveDraft={this.saveDraft}
              exportGist={this.exportGist}
              exportDraft={this.exportDraft}
              updateMeasurements={this.updateMeasurements}
              clearGist={this.clearGist}
              fromGist={this.props.fromGist}
            />
          </div>
        )
      }
    };
  };

  render() {
    let main = "";
    if (this.state.display === "docs")
      main = (
        <OptionDocs
          node={this.optionDocsNode()}
          language={this.props.language}
        />
      );
    else if (this.state.display === "spinner")
      main = (
        <Center>
          <Spinner />
        </Center>
      );
    else if (this.state.display === "gist")
      main = <Gist gist={this.state.gist} format={this.state.format} />;
    else if (this.state.display === "export")
      main = (
        <Export
          gist={this.state.gist}
          format={this.state.format}
          patron={this.props.user.patron || 0}
        />
      );
    else if (this.state.display === "draft") {
      main = <DraftPreview gist={this.state.gist} />;
    } else if (this.state.display === "layout") {
      main = (
        <LayoutBuilder
          gist={this.state.gist}
          intl={this.props.intl}
          units={this.props.user.settings.units}
          updateOption={this.updateOption}
        />
      );
    }
    return (
      <TwoColumns wrapReverse={true}>
        <Column wide>
          <div className="stick">{main}</div>
        </Column>
        <Column right narrow>
          <div className="stick">
            <Drawers drawers={this.getDrawers()} />
          </div>
        </Column>
      </TwoColumns>
    );
  }
}
//<Sidebar
//  gist={this.state.gist}
//  language={this.props.language}
//  units={this.props.user.settings.units}
//  display={this.state.display}
//  methods={{
//    saveDraft: this.saveDraft,
//    exportGist: this.exportGist,
//    exportDraft: this.exportDraft,
//    updateDisplay: this.updateDisplay,
//    updateOption: this.updateOption,
//    updateSetting: this.updateSetting,
//    updateMeasurements: this.updateMeasurements,
//    clearGist: this.clearGist
//  }}
//  fromGist={this.props.fromGist || false}
///>

const mapStateToProps = state => ({
  gist: state.gist
});

const mapDispatchToProps = dispatch => ({
  setGist: gist => dispatch(setGist(gist)),
  setDrafts: drafts => dispatch(setDrafts(drafts)),
  showNotification: (style, message) =>
    dispatch(showNotification(style, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(DraftContainer));
