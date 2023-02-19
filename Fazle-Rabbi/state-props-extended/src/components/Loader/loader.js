import { Component } from "react";
import "./loader.css";

export class Loader extends Component {
  render() {
    return (
      <div className="LoaderBalls">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
    );
  }
}
