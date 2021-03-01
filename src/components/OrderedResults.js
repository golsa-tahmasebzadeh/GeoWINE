import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class OrderedResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'orderedResultsTab',
            entities: this.props.dataFromApp
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(
            {
                entities: nextProps.dataFromApp
            }
        );
    }

    render () {
        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={(k) => this.setState({ key: k })}
                >
                <Tab eventKey="orderedResultsTab" title="Ordered Results">
                    <Card className={'border-light mb-3'} style={{height: 'auto', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                        <Card.Body>
                            {this.state.entities.sort((a, b) => (a.similarity.all > b.similarity.all) ? -1 : 1).map((entity, i) => (
                                <Card className={'border-light mb-3'} style={{width: '200px', display: 'inline-block', marginRight: '10px'}}>
                                    <div className={'wrapper'}>
                                        <Card.Img variant="top" src={entity.image_url} />
                                    </div>
                                    <Card.Body>
                                        <Card.Text>
                                            <small>{entity.label}</small>
                                            <br />
                                            <small className='text-muted'>{entity.id}</small>
                                            <br />
                                            <small>Rank: {i+1}</small>
                                            <br />
                                            <small>Total similarity: {entity.similarity.all.toFixed(4)}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Card.Body>
                    </Card>
                </Tab>

                {this.state.entities.length === 0 ?
                    <Tab eventKey='disabled' title="Ordered By Geolocation" disabled>
                    </Tab> :
                    <Tab eventKey="orderedGeolocationTab" title="Ordered By Geolocation">
                        <Card className={'border-light mb-3'} style={{height: 'auto', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                            <Card.Body>
                                {this.state.entities.sort((a, b) => (a.similarity.location > b.similarity.location) ? -1 : 1).map((entity, i) => (
                                    <Card className={'border-light mb-3'} style={{width: '200px', display: 'inline-block', marginRight: '10px'}}>
                                        <div className={'wrapper'}>
                                            <Card.Img variant="top" src={entity.image_url} />
                                        </div>
                                        <Card.Body>
                                            <Card.Text>
                                                <small>{entity.label}</small>
                                                <br />
                                                <small className='text-muted'>{entity.id}</small>
                                                <br />
                                                <small>Rank: {i+1}</small>
                                                <br />
                                                <small>Geolocation similarity: {entity.similarity.location.toFixed(4)}</small>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Card.Body>
                        </Card>
                    </Tab>
                }

                {this.state.entities.length === 0 ?
                    <Tab eventKey='disabled' title="Ordered By Scene" disabled>
                    </Tab> :
                    <Tab eventKey="orderedSceneTab" title="Ordered By Scene">
                        <Card className={'border-light mb-3'} style={{height: 'auto', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                            <Card.Body>
                                {this.state.entities.sort((a, b) => (a.similarity.scene > b.similarity.scene) ? -1 : 1).map((entity, i) => (
                                    <Card className={'border-light mb-3'} style={{width: '200px', display: 'inline-block', marginRight: '10px'}}>
                                        <div className={'wrapper'}>
                                            <Card.Img variant="top" src={entity.image_url} />
                                        </div>
                                        <Card.Body>
                                            <Card.Text>
                                                <small>{entity.label}</small>
                                                <br />
                                                <small className='text-muted'>{entity.id}</small>
                                                <br />
                                                <small>Rank: {i+1}</small>
                                                <br />
                                                <small>Scene similarity: {entity.similarity.scene.toFixed(4)}</small>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Card.Body>
                        </Card>
                    </Tab>
                }

                {this.state.entities.length === 0 ?
                    <Tab eventKey='disabled' title="Ordered By Object" disabled>
                    </Tab> :
                    <Tab eventKey="orderedObjectTab" title="Ordered By Object">
                        <Card className={'border-light mb-3'} style={{height: 'auto', overflowX: 'auto', whiteSpace: 'nowrap'}}>
                            <Card.Body>
                                {this.state.entities.sort((a, b) => (a.similarity.object > b.similarity.object) ? -1 : 1).map((entity, i) => (
                                    <Card className={'border-light mb-3'} style={{width: '200px', display: 'inline-block', marginRight: '10px'}}>
                                        <div className={'wrapper'}>
                                            <Card.Img variant="top" src={entity.image_url} />
                                        </div>
                                        <Card.Body>
                                            <Card.Text>
                                                <small>{entity.label}</small>
                                                <br />
                                                <small className='text-muted'>{entity.id}</small>
                                                <br />
                                                <small>Rank: {i+1}</small>
                                                {/* <br /> */}
                                                {/* <small>Object similarity: {entity.similarity.object}</small> */}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Card.Body>
                        </Card>
                    </Tab>
                }
            </Tabs>
        );
    }
}

export default OrderedResults;
