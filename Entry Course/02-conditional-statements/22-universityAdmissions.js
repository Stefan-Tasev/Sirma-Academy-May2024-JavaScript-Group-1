function universityAdmisions(score, activities) {

    if (score > 90 || (score > 79 && activities > 1)) {
        console.log('Admitted')
    }
    else{
        console.log('Not admitted')
    }
}

universityAdmisions(80, 2);
universityAdmisions(79, 5);
universityAdmisions(91, 0);
universityAdmisions(75, 12);