<?php

/* @WebProfiler/Collector/router.html.twig */
class __TwigTemplate_16ef9346ce37774bf3622b1136369012406b7bb0c514c311966b601bd51fa734 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/router.html.twig", 1);
        $this->blocks = array(
            'toolbar' => array($this, 'block_toolbar'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_438774e3b9d068d4d913a591dd9691e58a30d821fe493326850427f2dbc806cb = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_438774e3b9d068d4d913a591dd9691e58a30d821fe493326850427f2dbc806cb->enter($__internal_438774e3b9d068d4d913a591dd9691e58a30d821fe493326850427f2dbc806cb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/router.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_438774e3b9d068d4d913a591dd9691e58a30d821fe493326850427f2dbc806cb->leave($__internal_438774e3b9d068d4d913a591dd9691e58a30d821fe493326850427f2dbc806cb_prof);

    }

    // line 3
    public function block_toolbar($context, array $blocks = array())
    {
        $__internal_d690f19b2dbb6a29cd5f6cb1eee23da419af6350e0e8482a1dc08e2339f65601 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_d690f19b2dbb6a29cd5f6cb1eee23da419af6350e0e8482a1dc08e2339f65601->enter($__internal_d690f19b2dbb6a29cd5f6cb1eee23da419af6350e0e8482a1dc08e2339f65601_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "toolbar"));

        
        $__internal_d690f19b2dbb6a29cd5f6cb1eee23da419af6350e0e8482a1dc08e2339f65601->leave($__internal_d690f19b2dbb6a29cd5f6cb1eee23da419af6350e0e8482a1dc08e2339f65601_prof);

    }

    // line 5
    public function block_menu($context, array $blocks = array())
    {
        $__internal_e38879fb9de1f7db46d98f09d2d03cd50950ee4b6218828cc871c53544375670 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_e38879fb9de1f7db46d98f09d2d03cd50950ee4b6218828cc871c53544375670->enter($__internal_e38879fb9de1f7db46d98f09d2d03cd50950ee4b6218828cc871c53544375670_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 6
        echo "<span class=\"label\">
    <span class=\"icon\">";
        // line 7
        echo twig_include($this->env, $context, "@WebProfiler/Icon/router.svg");
        echo "</span>
    <strong>Routing</strong>
</span>
";
        
        $__internal_e38879fb9de1f7db46d98f09d2d03cd50950ee4b6218828cc871c53544375670->leave($__internal_e38879fb9de1f7db46d98f09d2d03cd50950ee4b6218828cc871c53544375670_prof);

    }

    // line 12
    public function block_panel($context, array $blocks = array())
    {
        $__internal_dd51c136388b7b95e1ef669d3d3a187a0def2c7dabc964db5d6ebedce9387dd7 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_dd51c136388b7b95e1ef669d3d3a187a0def2c7dabc964db5d6ebedce9387dd7->enter($__internal_dd51c136388b7b95e1ef669d3d3a187a0def2c7dabc964db5d6ebedce9387dd7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 13
        echo "    ";
        echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\HttpKernelExtension')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_router", array("token" => (isset($context["token"]) ? $context["token"] : $this->getContext($context, "token")))));
        echo "
";
        
        $__internal_dd51c136388b7b95e1ef669d3d3a187a0def2c7dabc964db5d6ebedce9387dd7->leave($__internal_dd51c136388b7b95e1ef669d3d3a187a0def2c7dabc964db5d6ebedce9387dd7_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/router.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 13,  67 => 12,  56 => 7,  53 => 6,  47 => 5,  36 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block toolbar %}{% endblock %}

{% block menu %}
<span class=\"label\">
    <span class=\"icon\">{{ include('@WebProfiler/Icon/router.svg') }}</span>
    <strong>Routing</strong>
</span>
{% endblock %}

{% block panel %}
    {{ render(path('_profiler_router', { token: token })) }}
{% endblock %}
", "@WebProfiler/Collector/router.html.twig", "/home/omanari/workspaceats/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views/Collector/router.html.twig");
    }
}
