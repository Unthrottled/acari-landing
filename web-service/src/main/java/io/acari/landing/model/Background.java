package io.acari.landing.model;

public class Background {
  private String backgroundStyle;
  private String textColor;

  public Background(String backgroundStyle, String textColor) {
    this.backgroundStyle = backgroundStyle;
    this.textColor = textColor;
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
}
