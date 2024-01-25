import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${({ theme }) => theme.spacing(4)};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.font.color.light};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

const StyledErrorText = styled.span`
  color: ${({ theme }) => theme.font.color.danger};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const StyledHiddenFileInput = styled.input`
  display: none;
`;
export const CommissionTrackerPage = () => {
  return <>TEMP</>;
  //   return <><StyledContent>
  //   <StyledButtonContainer>
  //     <StyledHiddenFileInput
  //       type="file"
  //       ref={hiddenFileInput}
  //       accept="image/jpeg, image/png, image/gif" // to desired specification
  //       onChange={(event) => {
  //         if (onUpload) {
  //           if (event.target.files) {
  //             onUpload(event.target.files[0]);
  //           }
  //         }
  //       }}
  //     />
  //     {isUploading && onAbort ? (
  //       <Button
  //         Icon={IconX}
  //         onClick={onAbort}
  //         variant="secondary"
  //         title="Abort"
  //         disabled={!picture || disabled}
  //         fullWidth
  //       />
  //     ) : (
  //       <Button
  //         Icon={IconUpload}
  //         onClick={onUploadButtonClick}
  //         variant="secondary"
  //         title="Upload"
  //         disabled={disabled}
  //         fullWidth
  //       />
  //     )}
  //     <Button
  //       Icon={IconTrash}
  //       onClick={onRemove}
  //       variant="secondary"
  //       title="Remove"
  //       disabled={!picture || disabled}
  //       fullWidth
  //     />
  //   </StyledButtonContainer>
  //   <StyledText>
  //     We support your best PNGs, JPEGs and GIFs portraits under 10MB
  //   </StyledText>
  //   {errorMessage && <StyledErrorText>{errorMessage}</StyledErrorText>}
  // </StyledContent>
  // </StyledContainer></>;
};
