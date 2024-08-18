import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Welcome to our Top Workout Sessions! Whether you're a fitness
          enthusiast or just starting your fitness journey, our carefully
          curated workout sessions are designed to deliver results and keep you
          motivated. Explore our selection of top-rated workouts, each tailored
          to target different fitness goals and levels
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Currently featured bootcamps</p>

        <div className="bootcamps">
          <div>
            <h4>Ultimate Strength Bootcamp</h4>
            <p>
              Unlock your true potential with our Ultimate Strength Bootcamp!
              Designed for all fitness levels, this bootcamp focuses on building
              muscular strength, endurance, and overall conditioning. With a
              blend of weightlifting, high-intensity interval training (HIIT),
              and functional exercises, you'll see noticeable improvements in
              your strength and fitness.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              Get ready to sweat and elevate your cardiovascular health with our
              Cardio Blast Bootcamp! This bootcamp combines various cardio
              workouts, including running, cycling, and jumping exercises, to
              help you burn calories, improve heart health, and boost your
              stamina.
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp</h4>
            <p>
              Find your zen and enhance your flexibility with our Yoga &
              Flexibility Bootcamp. Perfect for those looking to improve their
              balance, reduce stress, and increase flexibility. This bootcamp
              integrates yoga practices with stretching routines to promote
              overall well-being and physical relaxation.
            </p>
          </div>
          <div>
            <h4>Total Body Conditioning Bootcamp</h4>
            <p>
              Transform your body with our Total Body Conditioning Bootcamp.
              This comprehensive program focuses on full-body workouts that
              blend strength, cardio, and flexibility training to ensure a
              well-rounded fitness experience. Perfect for anyone looking to
              achieve overall fitness and health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
