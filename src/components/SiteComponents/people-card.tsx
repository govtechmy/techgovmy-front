import { People } from "@/resources/people";
import { FunctionComponent } from "react";
import Card from "../Card";
import { UserIcon } from "@heroicons/react/20/solid";

type PeopleCardProps = {
  people: People;
};

const PeopleCard: FunctionComponent<PeopleCardProps> = ({ people }) => {
  return (
    <Card className="p-3 flex items-center gap-3">
      <div className="w-[42px] h-[42px] bg-outline rounded-full flex items-center justify-center">
        <UserIcon className="h-5 w-5 text-outline-hover" />
      </div>
      <div>
        <p className="text-outline-hover-dark">{people.name}</p>

        <p className="text-dim dark:text-dim text-sm">{people.role}</p>
      </div>
    </Card>
  );
};

export default PeopleCard;
