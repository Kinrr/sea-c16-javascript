 function oldestAge (people) {
    var oldestPersonAge = _.pick(_.max(people, "age"), "age");
  };
  oldestAge(people);

  function living (people) {
    var personLiving = _.pluck(_.filter(people, "age"), "name");
  };
  living(people);

  function oldestLivingPerson (people) {
    var oldestPerson = _.pick(_.max(people, "age"), "name");
  };
  oldestLivingPerson(people);

