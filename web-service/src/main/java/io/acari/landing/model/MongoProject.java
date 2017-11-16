package io.acari.landing.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class MongoProject extends BaseProject {

  @Id
  private ObjectId _id;

  public MongoProject(Reach reach, ProjectRank rank, Background background, Description description, Location location) {
    super(reach, rank, background, description, location);
  }

  public ObjectId get_id() {
    return _id;
  }

  public void set_id(ObjectId _id) {
    this._id = _id;
  }


}


