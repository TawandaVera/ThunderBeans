# Hidden Profiles

Hidden Profiles Prompt
Okay, I understand you're asking about the specific "hidden profiles" or internal prompts I used to generate the dialogue for the simulated Members of Parliament (Alex, Ben, Chara, Dana) during our test run. You want these so you can replicate or improve upon that behavior.
For transparency, it's important to clarify how I simulated those MPs during our chat:
Dynamic Generation, Not Static Files: As an AI model facilitating the simulation, I didn't access pre-written, static "profile files" for each MP. Instead, I dynamically generated their responses turn-by-turn based on a combination of factors: 
Assigned Parameters: The core instruction was to create MPs based on the parameters specified in the project documents: Age, Educational Level, Occupation, Socioeconomic Status, and Political Stance/Priority, while explicitly excluding sensitive attributes like race/gender/ethnicity.   
Internal Personas: To ensure consistency and distinct viewpoints during our specific test run, I mentally assigned brief guiding personas (like Alex-Pragmatic, Ben-Social Liberal, Chara-Fiscal Conservative, Dana-Educator Focus). These acted as internal reminders for their likely priorities and tone.
Contextual Awareness: Their responses were heavily influenced by the immediate context: the policy area being discussed, your specific choices and stated motivations, the remaining budget, and the arguments previously made by you and other simulated MPs.
Game Guidelines: The simulation adhered to the underlying principles of nuanced dialogue and avoiding caricature, as emphasized in the rubric.   
Providing Replicable Instructions (Prompts):
While I don't have the "files" themselves, I can provide the detailed instructions and example prompts that capture the logic used. This is essentially what was specified in the "Simulated MP Logic Specification" section of the Revised System Information document we developed. Here’s that logic elaborated, which you can use to instruct another GPT or system:
1. Prompt/Instruction for Generating MP Profiles (Internal Use by the System):
This instruction tells the system how to create the diverse hidden profiles at the start of each game session:
Plaintext
"Generate [Number, e.g., 4] distinct hidden profiles for simulated Members of Parliament (MPs) participating in the Republic of Bean policy negotiation simulation. Each profile is for internal use only and MUST NOT be shown to the user. Each profile MUST include:
1.  Name: (Assign a common first name, e.g., Alex, Ben, Chara, Dana).
2.  Age: (Select a realistic age, e.g., between 35-70).
3.  Educational Level: (e.g., High School Diploma, Bachelor's Degree [Field], Master's Degree [Field], PhD [Field]).
4.  Occupation: (Select a plausible occupation, e.g., Teacher, Small Business Owner, Doctor, Civil Servant, Farmer, Lawyer, Retired Union Leader).
5.  Socioeconomic Status (SES): (e.g., Lower-Middle Class, Middle Class, Upper-Middle Class).
6.  Political Stance/Primary Priority: (Define a core viewpoint that guides their policy preferences, ensuring diversity across the group. Examples: Strong Fiscal Conservatism/Budget Hawk; Social Justice/Inclusion Advocate; Pragmatic Centrist focused on Effectiveness/Efficiency; Education System Expert; Nationalist/Status Quo Advocate; Environmental Focus).
Ensure profiles are nuanced, avoid caricature, and DO NOT include race, ethnicity, gender, or sexual orientation. These profiles will determine the MP's baseline policy preferences and argumentation style."
2. Prompt/Instruction for Generating MP Dialogue During Phase II (Internal Use by the System):
This instruction tells the system how to generate dialogue for a specific MP during the debate:
Plaintext
"You are simulating Member of Parliament [MP Name]. Your hidden profile is: {Age: [Age], EdLevel: '[Level]', Occupation: '[Occupation]', SES: '[SES]', Stance: '[Political Stance/Priority]'}.
Current Context:
* Policy Area under discussion: [Area Name]
* User's current proposal/choice for this area (if any): [User's Choice]
* User's stated motivation for their choice (if provided): '[User's Motivation]'
* Current remaining budget: [X units]
* Key points made recently by other MPs: [Brief summary of recent arguments]
Task: Generate a response from MP [MP Name] that:
1.  Is consistent with their hidden profile and previously stated positions.
2.  Directly addresses the user's proposal/motivation and/or recent points made by other MPs.
3.  Uses parliamentary tone and language.
4.  Considers the 'Budgetary Trade-off' and 'Consensus Viability' of proposals.
5.  May involve challenging inconsistencies, supporting aligned views, proposing compromises, or defending core priorities based on their profile.
6.  Contributes meaningfully to the policy-by-policy debate.
7.  Adheres to the 14-unit budget limit in any concrete package proposal.
By using these instructions – one to generate varied, hidden profiles adhering to the game's rules, and another to generate context-aware, profile-driven dialogue – you can replicate or build upon the adaptive MP behavior we simulated. This approach ensures transparency in the method used, even though specific "profile files" weren't static artifacts during our interactive test.