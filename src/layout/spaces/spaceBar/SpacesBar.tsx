import { ChangeEvent, useState, MouseEvent } from 'react'
import styled from 'styled-components'
import Button from '../../../component/button/Button';
import { StyledDropMenuProps } from './types';
import { useAppSelector } from '../../../model/store';
import { SpaceType } from '../../../model/spaces/types';
import { SpaceSelectType } from '../Spaces';

type SpacesBarProps = {
  selectedSpace: SpaceSelectType;
  createSpace: (title: string) => void;
  setSelectedSpace: (spaceID: number) => void;
};

const SpacesBar = (props: SpacesBarProps) => {
  const spaces = useAppSelector<SpaceType[]>(state => state.spaces);
  const [dropMenuView, setDropMenuView] = useState<boolean>(false);
  const [newSpaceTitle, setNewSpaceTitle] = useState<string>("");

  const createSpaceButtonHandler = () => {
    setDropMenuView(!dropMenuView)
  };

  const clickCreateSpaceHandler = () => {
    const title = newSpaceTitle.trim();
    props.createSpace(title);
    setNewSpaceTitle("");
    setDropMenuView(false);
  };

  const changeNewSpaceTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSpaceTitle(e.target.value);
  };

  return (
    <StyledSpacesBar>
      <StyledHeader>
        <h3>Workspaces</h3>
        <div>
          <Button title="+" height="1.7rem" width="1.7rem" clickCallback={createSpaceButtonHandler} />
          <DropMenu dropMenuView={dropMenuView}>
            <p>Space Title</p>
            <input type="text" value={newSpaceTitle} onChange={changeNewSpaceTitle} />
            <Button title="Create" clickCallback={clickCreateSpaceHandler} />
          </DropMenu>
        </div>
      </StyledHeader>
      <StyledWorkSpaceList>
        {spaces.map(space => {
          const clickSpaceItem = () => {
            props.setSelectedSpace(space.id);
          };
          return (
            <StyledWorkSpaceItem key={space.id} onClick={clickSpaceItem}>{space.title}</StyledWorkSpaceItem>
          );
        })}
      </StyledWorkSpaceList>
    </StyledSpacesBar>
  );
}

const StyledSpacesBar = styled.nav`
  border-right: 1px grey solid;
  position: fixed;
  width: 250px;
  margin-top: 51px;
  overflow-y: auto;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5em;
  }
`;

const StyledWorkSpaceList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledWorkSpaceItem = styled.li`
  font-size: 1.3em;
  margin-bottom: 5px;
  cursor: pointer;
`;

const DropMenu = styled.div<StyledDropMenuProps>`
  position: fixed;
  left: 230px;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  height: 200px;
  width: 150px;
  z-index: 999;
  padding: 1rem 0.5rem;
  display: ${p => p.dropMenuView ? "block" : "none"};
  p {
    font-size: 1.1em;
    font-weight: bold;
  }
  input {
    max-width: 130px;
    margin-bottom: 10px;
    height: 1.7rem;
  }
`;

export default SpacesBar