import { connect } from 'react-redux';

import { getShortedInfo } from '../selectors';
import Presenter from './presenter';
import * as actions from '../actions';

const Song = (props) => (
  <Presenter
    url={props.url}
    getSong={props.getSong}
  />
);

const mapStateToProps = (state, ownProps) => ({
  ...getShortedInfo(state),
  url: ownProps.match.params.url
});

const mapDispatchToProps = (dispatch) => ({
  getSong: (url) => dispatch(actions.asyncGetRequest(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Song);