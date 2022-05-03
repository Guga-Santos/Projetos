import React from 'react';
import '../App2.css';

export default function TextScrolling() {
  return (
    <div className="text-body">
      <div className="fade" />
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>Trybe - Episode II</p>
            <h1>FRONT-END</h1>
          </div>

          <p>It was a period of great confusion. We were introduced to REACT and suddenly all our sense of knowledge vanish. Few days later, when things started to get clear, Redux forces arrived and the war starts. </p>

          <p>During the battle, almost all trybers were psychologic commited with impostor syndrome. It was devastating. Some of us were unable to even move consciously through ACTIONS and REDUCERS. </p>

          <p>When there was almost no more hope, trybers received REACT FUNCTIONS knowledge and use states and effects to restore freedom and peace to the galaxy….</p>

          <p>So... we reach the end of a new Dev module.</p>
        </div>
      </section>
    </div>
  );
}
