package io.acari.landing.model;

public class ResponseProject extends BaseProject {

    private final Identifier identifier;

    public ResponseProject(Identifier identifier, Reach reach, ProjectRank rank, Background background, Description description, Location location) {
        super(reach, rank, background, description, location);
        this.identifier = identifier;
    }

    public Identifier getIdentifier() {
        return identifier;
    }
}
