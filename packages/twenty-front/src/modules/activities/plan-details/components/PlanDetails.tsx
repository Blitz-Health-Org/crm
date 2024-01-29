import styled from '@emotion/styled';

import { PlanDetailsList } from '@/activities/plan-details/components/PlanDetailsList';

const StyledPlanDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const PlanDetails = () => {
  return (
    <StyledPlanDetailsContainer>
      <PlanDetailsList />
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
