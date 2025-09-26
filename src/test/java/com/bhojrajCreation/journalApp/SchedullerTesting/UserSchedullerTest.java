package com.bhojrajCreation.journalApp.SchedullerTesting;

import com.bhojrajCreation.journalApp.Scheduller.UserScheduller;
<<<<<<< HEAD
import org.junit.jupiter.api.Disabled;
=======
>>>>>>> 0ecd5a8 (Initial clean commit)
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
<<<<<<< HEAD
@Disabled
=======
>>>>>>> 0ecd5a8 (Initial clean commit)
public class UserSchedullerTest {
    @Autowired
    private UserScheduller userScheduller;
    @Test
    public void fetchUserSAMailTest(){
        userScheduller.fetchUserSAMail();
    }
}
