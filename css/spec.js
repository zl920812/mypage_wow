function displaySpecializations(specializationsData) {
    // 清空 specializations-container 的内容
    let specializationsContainer = $("#specializations-container");
    specializationsContainer.empty();

    let { spec, cn_spec, name, en_name, heroic } = specializationsData;

    // 显示专精按钮
    spec.forEach((specialization, index) => {
        let buttonContainer = $("<div>")
            .addClass("heroic-container");
        let button = $("<button>")
            .addClass("button")
            .css("background-image", `url(data/logo/${name}/${specialization}.jpg)`) // 设置背景图像
            .click(function() {
                // 点击专精按钮后，显示英雄天赋选项
                loadTalents(name, specialization, heroic); // 传递正确的英雄天赋数组
                specializationsContainer.hide(); // 隐藏专精选择容器
            });
        let text = $("<span>")
            .addClass("class-text") 
            .text(cn_spec[index]); // 使用中文名称

        buttonContainer.append(button).append(text);
        specializationsContainer.append(buttonContainer);
    });

    specializationsContainer.show(); // 显示专精选择容器
}
