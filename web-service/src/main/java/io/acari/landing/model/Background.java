package io.acari.landing.model;

public class Background {
  private String _backgroundStyle;
  private String _textColor;
  private String _colorOne;
  private String _colorTwo;

  public Background(){}

  public Background(String _backgroundStyle, String _textColor, String _colorOne, String _colorTwo) {
    this._backgroundStyle = _backgroundStyle;
    this._textColor = _textColor;
    this._colorOne = _colorOne;
    this._colorTwo = _colorTwo;
  }

  public String get_backgroundStyle() {
    return _backgroundStyle;
  }

  public void set_backgroundStyle(String _backgroundStyle) {
    this._backgroundStyle = _backgroundStyle;
  }

  public String get_textColor() {
    return _textColor;
  }

  public void set_textColor(String _textColor) {
    this._textColor = _textColor;
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
