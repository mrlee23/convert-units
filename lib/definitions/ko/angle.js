var angle;

angle = {
  rad: {
    name: {
      singular: '라디안'
    , plural: '라디안'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: '도'
    , plural: '도'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: '그라디안'
    , plural: '그라디안'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: '분각'
    , plural: '분각'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: '초각'
    , plural: '초각'
    }
  , to_anchor: 1/3600
  }
};

module.exports = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};
