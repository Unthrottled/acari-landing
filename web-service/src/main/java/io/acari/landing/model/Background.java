package io.acari.landing.model;

public class Background {
  private String backgroundStyle;
  private String textColor;
  private String _colorOne;
  private String _colorTwo;

  public Background(String backgroundStyle, String textColor, String _colorOne, String _colorTwo) {
    this.backgroundStyle = backgroundStyle;
    this.textColor = textColor;
    this._colorOne = _colorOne;
    this._colorTwo = _colorTwo;
  }

  public String getBackgroundStyle() {
    return backgroundStyle;
  }

  public void setBackgroundStyle(String backgroundStyle) {
    this.backgroundStyle = backgroundStyle;
  }

  public String getTextColor() {
    return textColor;
  }

  public void setTextColor(String textColor) {
    this.textColor = textColor;
  }

  public String get_colorOne() {
    return _colorOne;
  }

  public void set_colorOne(String _colorOne) {
    this._colorOne = _colorOne;
  }

  public String get_colorTwo() {
    return _colorTwo;
  }

  public void set_colorTwo(String _colorTwo) {
    this._colorTwo = _colorTwo;
  }
}
