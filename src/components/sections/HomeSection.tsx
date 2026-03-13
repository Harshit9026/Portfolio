import SectionWrapper from "./SectionWrapper";

interface Props { onBack: () => void }

const HomeSection = ({ onBack }: Props) => (
  <SectionWrapper title="HOME BASE" onBack={onBack}>
    <div className="pixel-border rounded bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-6">
        <div className="h-20 w-20 shrink-0 rounded border border-border bg-muted flex items-center justify-center font-pixel text-[8px] text-muted-foreground">
          AVATAR
        </div>
        <div>
          <h3 className="font-pixel text-sm text-primary mb-2">[Harshit Shukla]</h3>
          <p className="text-sm text-muted-foreground">[Software Developer / Problem Solver]</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-foreground">
        [ I'm a passionate full-stack developer  specialize in building responsive, scalable web applications using React, Node.js, and modern web technologies. Through hands-on projects, internships, and hackathons, I've developed a strong foundation in frontend and backend development, and I’m always eager to learn and solve real-world problems.]
        <br/> When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while planning my next 
                creative project.
      </p>
    </div>
  </SectionWrapper>
);

export default HomeSection;
