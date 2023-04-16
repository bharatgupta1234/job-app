import { Button, JobCard } from "components";

const Home = () => {
  return (
    <div className="m-32 ">
      <div className="flex justify-end">
        <Button />
      </div>
      <div className="flex my-32">
        <JobCard />
      </div>
    </div>
  );
};

export default Home;
