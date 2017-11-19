package io.acari.landing;


import java.util.Optional;

public class ApplicationUserRepository  {
	ApplicationUser findByUsername(String username){
			return Optional.ofNullable(username)
					.filter(u -> u.equals("foo"))
					.map(u -> new ApplicationUser(u, "foo"))
					.orElse(null);
	}
}
