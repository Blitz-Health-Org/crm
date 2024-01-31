import styled from '@emotion/styled';

import { PlanDetailsList } from '@/activities/plan-details/components/PlanDetailsList';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';

const StyledPlanDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

type PlanDetailsProps = {
  targetableObject: ActivityTargetableObject;
};

export const PlanDetails = ({ targetableObject }: PlanDetailsProps) => {
  return (
    <StyledPlanDetailsContainer>
      <PlanDetailsList targetableObject={targetableObject} />
      {/* <NoteList
        title="All"
        notes={notes ?? []}
        button={
          <Button
            Icon={IconPlus}
            size="small"
            variant="secondary"
            title="Add note"
            onClick={() =>
              openCreateActivity({
                type: 'Note',
                targetableObjects: [targetableObject],
              })
            }
          ></Button>
        }
      /> */}
    </StyledPlanDetailsContainer>
  );
};
