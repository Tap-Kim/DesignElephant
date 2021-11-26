module.exports = (api) => {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: '> 0.25%, not dead',
                useBuiltIns: 'usage',
                corejs: 3,
                shippedProposals: true,
                modules: false,
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ];

    const plugins = ['@babel/plugin-proposal-optional-chaining'];

    return {
        presets,
        plugins,
    };
};
/*
    targets : 프로젝트를 지원 / 대상으로하는 환경을 결정할 수 있습니다.
    useBuiltIns : poly-fill 을 처리하는 방법을 결정합니다.
    corejs : @babel/polyfill이 deprecated 되면서 대체로 corejs 옵션을 사용합니다.
    shippedProposals : 브라우저에 제공된 기능 제안에 대한 지원을 활성화
    modules : ES 모듈 구문을 다른 모듈 유형으로 변환 할 수 있습니다.
*/