import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentoring-program',
  templateUrl: './mentoring-program.component.html',
  styleUrls: ['./mentoring-program.component.scss']
})
export class MentoringProgramComponent implements OnInit {
  programData: { title: string; description: string; banner: { link: string; }; html: string; };

  constructor() { }

  ngOnInit() {
    this.programData = {
      title: 'Mentoring Program',
      description: 'WHAT IS MENTORING ???',
      banner: {
        link: 'http://icsn.co.uk/wp-content/uploads/2018/09/icsn-header-fired.jpg'
      },
      html: `
        <p>A mentoring relationship is usually where one wiser and more experienced person assists another person to grow and learn. It is not a new technique. Since humans have lived in social groups we have learnt our norms, values and behaviours by the example and coaching of others. This method is the exact fabric that has helped us within the Igbo community flourish both personally and professionally. By speaking to your parents or people from the older generation they will share with you stories of influential people they had in their lives that have helped them with the right advice/ guidance of support during different phases in there levels (especially during transition periods).</p>
        <p>New adaptations of mentoring allowing individuals to interact as colleagues (Peer-to-Peer) in a helping relationship. This method show both parties are more equal, which can cultivate growth and learning at a level that is mutual benefit. After all the best teachers learn much from their students, counsellors constantly learn from clients and partners in any successful relationship grow and develop along the way. We as people are always learning from others, adopting modelled behaviours and attitudes and absorbing the culture and perceived values of the environments we enter.</p>

        <h4>WHY MENTORING PROGRAM?</h4>
        <p>ICSN consists of a wide range of individuals from graduates, supervisors, middle managers up to senior managers working in different fields of work. We have found through a survey of ICSN members that there is a definite interest in professional development due to a lack of experience, knowledge and skills competencies to develop this in their field of work.</p>

        <h4>ICSN MENTORING AIM</h4>
        <p>The aim of the ICSN mentoring scheme is to help facilitate the professional development of aspiring young Igbo graduates or individuals who are searching for careers by matching the individual with professionals who are established within their field who will act as a mentor.</p>

        <h4>OBJECTIVES</h4>
        <p>The objective of the scheme is to effectively develop the job prospects of aspiring young professionals. To be mentored on this program you will need to be members of ICSN.</p>

        <h4>OUR MENTORING PROGRAM (Structure, Benefits)</h4>
        <p>The mentoring program will involve regular One-to-one meetings between mentor and mentee although contact can also take the form of E-mails and phone calls between mentor and mentees.</p>
        <p>The lenght of a mentoring partnerships typically lasts around 6 months but is always subject to the two individuals involved and has been know to last years for some people , although this can also be up to the discretion of the mentor and mentee. The pair are supposed to meet at least once every fortnight in a mutually agreed location of their choosing (this could potentially be at the ICSN GHM on 2nd Sunday of the month) for at least an hour at a time. The ICSN welfare co-ordinator will be your first point of contact for mentors and mentees should there be any queries or problems.</p>
        <p>The content of the meeting and discussion will be based on the individual needs of each mentee but could range from areas of professional development to personal issues that impact on mentee. Mentors it is important to at least clarify this at your first meeting as well as getting to know the ‘person’ before getting to know the mentee. The relationship is strictly confidential and its contents must not be discussed with any individuals, without the express permission of both the mentee and mentor.</p>
        <p>The participants of this program will be expected to give ICSN regular feedback and at the end of the partnership to evaluate the effectiveness and impact of the program.</p>

        <h4>MENTORING BENEFITS</h4>
        <ul>
          <li>One-to-one careers advice, support and guidance from an experienced professional for up to 6 months</li>
          <li>Develop personal and professional competencies which will set you apart from other graduates or professionals</li>
          <li>Gain a realistic insight into your chosen profession</li>
          <li>Great addition to your CV</li>
          <li>Possible networking opportunities</li>
          <li>Mentee training, resources and ongoing support</li>
        </ul>

        <h4>TARGET GROUP</h4>
        <p>The scheme will be open to ICSN Members who are graduates or in the process of career searching.</p>
        <p>To sign up to day contact us support@icsn.co.uk</p>
      `
    };
  }

}
