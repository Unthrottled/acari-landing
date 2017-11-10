package io.acari.landing.model;

public class Description {
    private String excerpt;
    private String preachySpeechy;

  public Description(String excerpt, String preachySpeechy) {
    this.excerpt = excerpt;
    this.preachySpeechy = preachySpeechy;
  }

  public String getExcerpt() {
    return excerpt;
  }

  public void setExcerpt(String excerpt) {
    this.excerpt = excerpt;
  }

  public String getPreachySpeechy() {
    return preachySpeechy;
  }

  public void setPreachySpeechy(String preachySpeechy) {
    this.preachySpeechy = preachySpeechy;
  }
}
