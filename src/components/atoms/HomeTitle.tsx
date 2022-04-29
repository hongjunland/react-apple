import styled from "@emotion/styled";

interface HomeTitleProps{
  children: React.ReactNode;
}
function HomeTitle({children}: HomeTitleProps){
  <Atom>
    {children}
  </Atom>
}
const Atom = styled.h1`
  font-weight: 700;
`;
export default HomeTitle;