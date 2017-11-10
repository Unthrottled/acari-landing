package io.acari.landing.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Project {

  @Id
  private ObjectId _id;
  private Reach selectedReach;
  private ProjectRank rank;
  private Background background;
  private Description description;
  private Location location;

  public Project(Reach selectedReach, ProjectRank rank, Background background, Description description, Location location) {
    this.selectedReach = selectedReach;
    this.rank = rank;
    this.background = background;
    this.description = description;
    this.location = location;
  }

  public ObjectId get_id() {
    return _id;
  }

  public void set_id(ObjectId _id) {
    this._id = _id;
  }

  public Reach getSelectedReach() {
    return selectedReach;
  }

  public void setSelectedReach(Reach selectedReach) {
    this.selectedReach = selectedReach;
  }

  public ProjectRank getRank() {
    return rank;
  }

  public void setRank(ProjectRank rank) {
    this.rank = rank;
  }

  public Background getBackground() {
    return background;
  }

  public void setBackground(Background background) {
    this.background = background;
  }

  public Description getDescription() {
    return description;
  }

  public void setDescription(Description description) {
    this.description = description;
  }

  public Location getLocation() {
    return location;
  }

  public void setLocation(Location location) {
    this.location = location;
  }
}


