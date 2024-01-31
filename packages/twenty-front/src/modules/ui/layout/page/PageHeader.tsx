import { ComponentProps, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { IconChevronLeft } from '@/ui/display/icon/index';
import { IconChevronDown } from '@/ui/display/icon/index';
import { IconChevronUp } from '@/ui/display/icon/index';
import { IconComponent } from '@/ui/display/icon/types/IconComponent';
import { OverflowingTextWithTooltip } from '@/ui/display/tooltip/OverflowingTextWithTooltip';
import { IconButton } from '@/ui/input/button/components/IconButton';
import { NavigationDrawerCollapseButton } from '@/ui/navigation/navigation-drawer/components/NavigationDrawerCollapseButton';
import { isHeaderOpenState } from '@/ui/navigation/states/isHeaderOpenState';
import { isNavigationDrawerOpenState } from '@/ui/navigation/states/isNavigationDrawerOpenState';
import { MOBILE_VIEWPORT } from '@/ui/theme/constants/theme';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';

export const PAGE_BAR_MIN_HEIGHT = 40;

const StyledTopBarMotionContainer = styled(motion.div)<{
  isHeaderOpen: boolean;
}>`
  align-items: center;
  background: ${({ theme }) => theme.background.noisy};
  color: ${({ theme }) => theme.font.color.primary};
  display: flex;
  flex-direction: row;
  width: 100%;
  minHeight = ${({ isHeaderOpen }) =>
    isHeaderOpen ? `${PAGE_BAR_MIN_HEIGHT}px` : '0'};
  font-size: ${({ theme }) => theme.font.size.lg};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  padding-left: 0;
  padding-right: ${({ theme }) => theme.spacing(3)};
  z-index: 20;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-left: ${({ theme }) => theme.spacing(3)};
  }
`;

const StyledComplete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const StyledLeftContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  width: 100%;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-left: ${({ theme }) => theme.spacing(1)};
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.font.size.md};
  margin-left: ${({ theme }) => theme.spacing(1)};
  max-width: 50%;
`;

const StyledTopBarIconStyledTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
`;

const StyledPageActionContainer = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const StyledTopBarButtonContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing(1)};
  margin-right: ${({ theme }) => theme.spacing(1)};
`;

type PageHeaderProps = ComponentProps<'div'> & {
  title: string;
  hasBackButton?: boolean;
  Icon: IconComponent;
  children?: ReactNode;
};

export const PageHeader = ({
  title,
  hasBackButton,
  Icon,
  children,
}: PageHeaderProps) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNavigationDrawerOpen = useRecoilValue(isNavigationDrawerOpenState);
  const [isHeaderOpen, setIsHeaderOpen] = useRecoilState(isHeaderOpenState);

  useEffect(() => {
    setIsHeaderOpen(!isMobile);
  }, [isMobile, setIsHeaderOpen]);

  const desktopHeight = !isHeaderOpen ? 0 : 'auto';
  const mobileHeight = !isHeaderOpen ? '100%' : 0;

  return (
    <StyledComplete>
      {!isMobile && !isNavigationDrawerOpen && (
        <StyledTopBarButtonContainer>
          <NavigationDrawerCollapseButton direction="right" />
        </StyledTopBarButtonContainer>
      )}
      {hasBackButton && (
        <IconButton
          Icon={IconChevronLeft}
          size="small"
          onClick={() => navigate(-1)}
          variant="tertiary"
        />
      )}

      <IconButton
        Icon={isHeaderOpen ? IconChevronUp : IconChevronDown}
        size="small"
        onClick={() => setIsHeaderOpen(!isHeaderOpen)}
        variant="tertiary"
      />
      <StyledTopBarMotionContainer
        isHeaderOpen={isHeaderOpen}
        initial={false}
        animate={{
          height: isMobile ? mobileHeight : desktopHeight,
          opacity: isHeaderOpen ? 1 : 0,
        }}
        transition={{
          duration: theme.animation.duration.normal,
        }}
      >
        <StyledLeftContainer>
          <StyledTopBarIconStyledTitleContainer>
            {Icon && <Icon size={theme.icon.size.md} />}
            <StyledTitleContainer data-testid="top-bar-title">
              <OverflowingTextWithTooltip text={title} />
            </StyledTitleContainer>
          </StyledTopBarIconStyledTitleContainer>
        </StyledLeftContainer>
        <StyledPageActionContainer>{children}</StyledPageActionContainer>
      </StyledTopBarMotionContainer>
    </StyledComplete>
  );
};
