<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\widgets;

use yii\helpers\ArrayHelper;
use yii\helpers\Html;

/**
 * Renders
 * Class LeftNavBar
 * @package yii\bootstrap
 */
class LeftNavBar extends \yii\bootstrap\Widget
{
	/**
	 * @var array the HTML attributes for the widget container tag. The following special options are recognized:
	 *
	 * - tag: string, defaults to "nav", the name of the container tag
	 */
	public $options = [];
	/**
	 * @var array the HTML attributes for the container tag. The following special options are recognized:
	 *
	 * - tag: string, defaults to "div", the name of the container tag
	 */
	public $containerOptions = [];
	/**
	 * @var string the text of the brand. Note that this is not HTML-encoded.
	 * @see http://getbootstrap.com/components/#navbar
	 */
	public $brandLabel;
	/**
	 * @param array|string $url the URL for the brand's hyperlink tag. This parameter will be processed by [[Html::url()]]
	 * and will be used for the "href" attribute of the brand link. If not set, [[\yii\web\Application::homeUrl]] will be used.
	 */
	public $brandUrl;
	/**
	 * @var array the HTML attributes of the brand link.
	 */
	public $brandOptions = [];
	/**
	 * @var string text to show for screen readers for the button to toggle the navbar.
	 */
	public $screenReaderToggleText = 'Toggle navigation';
	/**
	 * @var bool whether the navbar content should be included in an inner div container which by default
	 * adds left and right padding. Set this to false for a 100% width navbar.
	 */
	public $renderInnerContainer = true;
	/**
	 * @var array the HTML attributes of the inner container.
	 */
	public $innerContainerOptions = [];

	/**
	 * Initializes the widget.
	 */
	public function init()
	{
		parent::init();
		$this->clientOptions = false;
		Html::addCssClass($this->options, '');
		if ($this->options['class'] === 'navbar') {
			Html::addCssClass($this->options, 'navbar-default');
		}
		Html::addCssClass($this->brandOptions, 'navbar-brand');
		if (empty($this->options['role'])) {
			$this->options['role'] = 'navigation';
		}
		$options = $this->options;
		$tag = ArrayHelper::remove($options, 'tag', 'nav');
		echo Html::beginTag($tag, $options);
		$options = $this->containerOptions;
		$tag = ArrayHelper::remove($options, 'tag', 'div');
		echo Html::beginTag($tag, $options);
	}

	/**
	 * Renders the widget.
	 */
	public function run()
	{
		$tag = ArrayHelper::remove($this->containerOptions, 'tag', 'div');
		echo Html::endTag($tag);
		if ($this->renderInnerContainer) {
			echo Html::endTag('div');
		}
		$tag = ArrayHelper::remove($this->options, 'tag', 'nav');
		echo Html::endTag($tag, $this->options);
		\yii\bootstrap\BootstrapPluginAsset::register($this->getView());
	}

	/**
	 * Renders collapsible toggle button.
	 * @return string the rendering toggle button.
	 */
	protected function renderToggleButton()
	{
		$bar = Html::tag('span', '', ['class' => 'icon-bar']);
		$screenReader = "<span class=\"sr-only\">{$this->screenReaderToggleText}</span>";
		return Html::button("{$screenReader}\n{$bar}\n{$bar}\n{$bar}", [
			'class' => 'navbar-toggle',
			'data-toggle' => 'collapse',
			'data-target' => "#{$this->containerOptions['id']}",
		]);
	}
}
