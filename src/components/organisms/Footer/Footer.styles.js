import styled from "styled-components";

export const FooterStyles = styled.div`
   align-items: start;
   bottom: 0;
   color: ${({ theme }) => theme.colors.textHeader};
   display: flex;
   font-size: 1.3em;
   gap: 5px;
   justify-content: start;
   padding: 0 20px;
   position: absolute;
   width: 100%;

   span {
      padding: 10px 8px 0;
   }

   a.navLink {
      /* background-color: blue; */
      /* width: 15px; */
      height: 100%;
      padding: 10px 8px 0;
   }

   a svg {
      color: ${({ theme }) => theme.colors.textHeader};
      transition: all 0.3s ease-in-out;
      width: 30px;

      &:hover {
         transform: scale(0.8);
      }
   }

   button {
      background-color: ${({ theme }) => theme.colors.cross};
      border: none;
      border-radius: 25px;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      padding: 6px 0;
      position: absolute;
      right: 5%;
      transition: all 0.3s ease-in-out;
      width: 100px;

      &:hover {
         transform: scale(0.8);
      }
   }
`;
