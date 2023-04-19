import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import { Button } from '@components';
import styled from 'styled-components/native';
import { ListStatus } from '@screens';

/**
 * Types
 */

interface FooterProps {
  listStatus: ListStatus;
  setListStatus: Dispatch<SetStateAction<ListStatus>>;
}

/**
 * Styled components
 */

const FooterWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-horizontal: 20px;
  position: absolute;
  bottom: 4%;
  left: 0%;
`;

export const Footer: FunctionComponent<FooterProps> = ({ listStatus, setListStatus }) => {
  const shouldShowASingleButton = listStatus !== ListStatus.ALL;

  return (
    <FooterWrapper>
      {shouldShowASingleButton ? (
        <Button
          title="Todos"
          isASingleButton={true}
          handlePress={() => {
            setListStatus(ListStatus.ALL);
          }}
        />
      ) : (
        <>
          <Button
            title="Ganados"
            isASingleButton={false}
            handlePress={() => {
              setListStatus(ListStatus.WON);
            }}
          />
          <Button
            title="Canjeados"
            isASingleButton={false}
            handlePress={() => {
              setListStatus(ListStatus.REDEEMED);
            }}
          />
        </>
      )}
    </FooterWrapper>
  );
};
