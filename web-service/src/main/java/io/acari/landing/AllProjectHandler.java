package io.acari.landing;

import io.acari.landing.model.BaseProject;
import io.acari.landing.model.MongoProject;
import io.acari.landing.model.ResponseProject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class AllProjectHandler {

  private final ProjectRepository projectRepository;

  @Autowired
  public AllProjectHandler(ProjectRepository projectRepository) {
    this.projectRepository = projectRepository;
  }

  public Flux<ResponseProject> findAll(){
    return this.projectRepository.findAll()
        .map(ResponseProject::new)
        .sort(ResponseProject::compareTo);
    }
}
