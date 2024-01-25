import styled from '@emotion/styled';

const StyledPropertyBoxContainer = styled.div`
  align-self: stretch;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
`;

interface PropertyBoxRowProps {
  children: React.ReactNode;
  extraPadding?: boolean;
}

export const PropertyBoxRow = ({ children }: PropertyBoxRowProps) => (
  <StyledPropertyBoxContainer>{children}</StyledPropertyBoxContainer>
);
