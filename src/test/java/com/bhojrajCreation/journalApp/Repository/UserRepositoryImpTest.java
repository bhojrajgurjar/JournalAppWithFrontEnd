package com.bhojrajCreation.journalApp.Repository;

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
public class UserRepositoryImpTest {
    @Autowired
    private UserRepositoryImp userRepositoryImp;

    @Test
    public void toSaveUser(){
        userRepositoryImp.getUserForSA();
    }
}
