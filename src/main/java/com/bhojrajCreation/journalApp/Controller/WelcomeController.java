package com.bhojrajCreation.journalApp.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {

<<<<<<< HEAD
    @GetMapping("/")
=======
    @GetMapping("/welcome")
>>>>>>> 0ecd5a8 (Initial clean commit)
    public String welcome() {
        return "welcome";
    }
}