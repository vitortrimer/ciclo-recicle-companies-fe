import styled from "styled-components"

export const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  margin-top: 50px;
`


export const ProductTitle = styled.h3`
  margin-bottom: 50px;
`

export const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 236px;
  height: 236px;
  margin-top: 16px;
  background: #fff;

  border-radius: 50%;
`

export const ProductImage = styled.img`
  width: 236px;
  height: 236px;
  object-fit: scale-down;
  border-radius: 50%;
`

export const EditButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 15px;
`

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`

export const ProductDescription = styled.div`
  width: 100%;
`

export const DescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #202020;
`

export const ProductDescriptionItemsContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 26px;

`

export const ProductDescriptionItem = styled.div`
  display: flex;
  align-items: center;

  background: #FFFFFF;
  padding: 10px 26px;

  span {
    color: #338152;
    margin-left: 24px;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin-bottom: 20px;
`

export const ActionButton = styled.button`
  margin-left: 16px;
  display: flex;
  align-items: flex-end;
  font-size: 16px;
  font-weight: 700;

  img {
    margin-left: 8px;
  }
`

export const InfoInputView = styled.div`
  display: flex;

  :not(:first-child) {
    margin-top: 8px;
  }

  button {
    margin-left: 12px;
  }

`