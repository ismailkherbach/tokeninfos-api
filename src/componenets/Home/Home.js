import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTokenInfos } from "../../redux/actions";
import { Button } from "../Core/Button";
import { Container } from "../Core/Container";
import { Error } from "../Core/Error";
import { Input } from "../Core/Input";
import { LoadingSpinner } from "../Core/Loading";
import { Picture } from "../Core/Picture";
import { Description, Subtitle, Title } from "../Core/Title";
import Wallet from "../Wallet/Wallet";
import "./Home.scss";
export function HomeScreen({
  getTokenInfos,
  wallet: { token_infos, loading, error },
}) {
  const [symbol, setSymbol] = useState("");

  const handleInputChange = (e) => {
    setSymbol(e.target.value);
  };

  const onSearchToken = () => {
    getTokenInfos({ symbol: symbol });
  };
  return (
    <>
      {!loading ? (
        <Container classname={"home"}>
          <Container classname={"search fdr"}>
            <Input
              onChange={handleInputChange}
              placeholder="Enter the token symbol"
            />
            <Button onClick={onSearchToken}>Search</Button>
          </Container>
          {token_infos && (
            <Container classname={"search-result"}>
              <Picture src={token_infos.logo} />
              <Title>Name : {token_infos.name}</Title>
              <Subtitle>Symbol : {token_infos.symbol}</Subtitle>
              <Subtitle>Category : {token_infos.category}</Subtitle>
              <Description>Description : {token_infos.description}</Description>
            </Container>
          )}
          {error && <Error>{error}</Error>}
        </Container>
      ) : (
        <Container classname={"home"}>
          <LoadingSpinner />
        </Container>
      )}
    </>
  );
}

const mapStateToProps = ({ wallet }) => {
  return { wallet };
};
const mapDispatchToProps = { getTokenInfos };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
