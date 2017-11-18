package io.acari.landing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
public class ProjectRemovalHandler {

  private final ProjectRepository projectRepository;
  private final ImageHandler imageHandler;

  @Autowired
  public ProjectRemovalHandler(ProjectRepository projectRepository,
                               ImageHandler imageHandler) {
    this.projectRepository = projectRepository;
    this.imageHandler = imageHandler;
  }

  public Mono<Boolean> removeProject(Mono<String> projectId){
    return projectId
        .flatMap(this.projectRepository::findById)
        .flatMap(project->{
          Mono<Boolean> booleanMono = imageHandler.removeImage(project.getImageId());
          Mono<Boolean> voidMono = projectRepository.deleteById(project.getProjectId()).map(a->true);
          return booleanMono.zipWith(voidMono, (imageRemoved, projectRemoved)->imageRemoved && projectRemoved);
        });

    }
}
