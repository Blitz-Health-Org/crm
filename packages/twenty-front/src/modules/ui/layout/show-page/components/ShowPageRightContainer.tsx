import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

// import { Threads } from '@/activities/emails/components/Threads';
import { Attachments } from '@/activities/files/components/Attachments';
import { Notes } from '@/activities/notes/components/Notes';
import { PlanDetails } from '@/activities/plan-details/components/PlanDetails';
import { ObjectTasks } from '@/activities/tasks/components/ObjectTasks';
import { Timeline } from '@/activities/timeline/components/Timeline';
import { ActivityTargetableObject } from '@/activities/types/ActivityTargetableEntity';
import { useObjectMetadataItem } from '@/object-metadata/hooks/useObjectMetadataItem';
import {
  IconCheckbox,
  IconMail,
  IconNotes,
  IconPaperclip,
  IconTimelineEvent,
} from '@/ui/display/icon';
import { TabList } from '@/ui/layout/tab/components/TabList';
import { useTabList } from '@/ui/layout/tab/hooks/useTabList';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';

const StyledShowPageRightContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: start;
  overflow: ${() => (useIsMobile() ? 'none' : 'hidden')};
  width: calc(100% + 4px);
`;

const StyledTabListContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.border.color.light}`};
  box-sizing: border-box;
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  height: 40px;
`;

const TAB_LIST_COMPONENT_ID = 'show-page-right-tab-list';

type ShowPageRightContainerProps = {
  targetableObject: ActivityTargetableObject;
  timeline?: boolean;
  tasks?: boolean;
  notes?: boolean;
  emails?: boolean;
  planDetails?: boolean;
  employerInfo?: boolean;
};

export const ShowPageRightContainer = ({
  targetableObject,
  timeline,
  tasks,
  notes,
  emails,
  planDetails,
  employerInfo,
}: ShowPageRightContainerProps) => {
  const isMessagingEnabled = useIsFeatureEnabled('IS_MESSAGING_ENABLED');

  const { getActiveTabIdState } = useTabList(TAB_LIST_COMPONENT_ID);
  const activeTabId = useRecoilValue(getActiveTabIdState());

  const { objectMetadataItem: targetableObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular: targetableObject.targetObjectNameSingular,
    });

  const TASK_TABS = [
    {
      id: 'notes',
      title: 'Notes',
      Icon: IconNotes,
      hide: !notes,
    },
    {
      id: 'tasks',
      title: 'Tasks',
      Icon: IconCheckbox,
      hide: !tasks,
    },
    {
      id: 'files',
      title: 'Files',
      Icon: IconPaperclip,
      hide: !notes,
      disabled: targetableObjectMetadataItem.isCustom,
    },
    {
      id: 'emails',
      title: 'Emails',
      Icon: IconMail,
      hide: !emails,
      disabled: !isMessagingEnabled || targetableObjectMetadataItem.isCustom,
    },
    {
      id: 'timeline',
      title: 'Timeline',
      Icon: IconTimelineEvent,
      hide: !timeline,
    },
    {
      id: 'planDetails',
      title: 'Plan Details',
      Icon: IconTimelineEvent, //TODO: fix icon
      hide: !planDetails,
    },
    {
      id: 'employerInfo',
      title: 'Employer Info',
      Icon: IconTimelineEvent, //TODO: fix icon
      hide: !employerInfo,
    },
  ];

  return (
    <StyledShowPageRightContainer>
      <StyledTabListContainer>
        <TabList tabListId={TAB_LIST_COMPONENT_ID} tabs={TASK_TABS} />
      </StyledTabListContainer>
      {activeTabId === 'timeline' && (
        <Timeline targetableObject={targetableObject} />
      )}
      {activeTabId === 'tasks' && (
        <ObjectTasks targetableObject={targetableObject} />
      )}
      {activeTabId === 'notes' && <Notes targetableObject={targetableObject} />}
      {activeTabId === 'files' && (
        <Attachments targetableObject={targetableObject} />
      )}
      {/* {activeTabId === 'emails' && <Threads entity={targetableObject} />} */}
      {activeTabId === 'planDetails' && (
        <PlanDetails targetableObject={targetableObject} />
      )}
    </StyledShowPageRightContainer>
  );
};
