<?php

/* @Twig/Exception/exception_full.html.twig */
class __TwigTemplate_20b6f10ca396b0418c0f2388a76476f1db84bbc94dde61b359f81829edaa554a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@Twig/layout.html.twig", "@Twig/Exception/exception_full.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'title' => array($this, 'block_title'),
            'body' => array($this, 'block_body'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@Twig/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_ec360f7aced6d2077e716646c6ecb20304204f058638d4e0bf793e2e565e4234 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_ec360f7aced6d2077e716646c6ecb20304204f058638d4e0bf793e2e565e4234->enter($__internal_ec360f7aced6d2077e716646c6ecb20304204f058638d4e0bf793e2e565e4234_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@Twig/Exception/exception_full.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_ec360f7aced6d2077e716646c6ecb20304204f058638d4e0bf793e2e565e4234->leave($__internal_ec360f7aced6d2077e716646c6ecb20304204f058638d4e0bf793e2e565e4234_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_34dd325c5f72950ec332b07f5ae08e94ecc3a9ab43833fe557529ae0cd2b0e27 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_34dd325c5f72950ec332b07f5ae08e94ecc3a9ab43833fe557529ae0cd2b0e27->enter($__internal_34dd325c5f72950ec332b07f5ae08e94ecc3a9ab43833fe557529ae0cd2b0e27_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    <link href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('Symfony\Bridge\Twig\Extension\HttpFoundationExtension')->generateAbsoluteUrl($this->env->getExtension('Symfony\Bridge\Twig\Extension\AssetExtension')->getAssetUrl("bundles/framework/css/exception.css")), "html", null, true);
        echo "\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
";
        
        $__internal_34dd325c5f72950ec332b07f5ae08e94ecc3a9ab43833fe557529ae0cd2b0e27->leave($__internal_34dd325c5f72950ec332b07f5ae08e94ecc3a9ab43833fe557529ae0cd2b0e27_prof);

    }

    // line 7
    public function block_title($context, array $blocks = array())
    {
        $__internal_c7be97e75f82b39a583b35d13cbc41f280b0d43c5f8a7ef744068d47b04882b7 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_c7be97e75f82b39a583b35d13cbc41f280b0d43c5f8a7ef744068d47b04882b7->enter($__internal_c7be97e75f82b39a583b35d13cbc41f280b0d43c5f8a7ef744068d47b04882b7_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "title"));

        // line 8
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["exception"]) ? $context["exception"] : $this->getContext($context, "exception")), "message", array()), "html", null, true);
        echo " (";
        echo twig_escape_filter($this->env, (isset($context["status_code"]) ? $context["status_code"] : $this->getContext($context, "status_code")), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["status_text"]) ? $context["status_text"] : $this->getContext($context, "status_text")), "html", null, true);
        echo ")
";
        
        $__internal_c7be97e75f82b39a583b35d13cbc41f280b0d43c5f8a7ef744068d47b04882b7->leave($__internal_c7be97e75f82b39a583b35d13cbc41f280b0d43c5f8a7ef744068d47b04882b7_prof);

    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        $__internal_b8ac5df2b1269fa81a9004abd193e838a8a22939dfdd050af0da577c01c88444 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_b8ac5df2b1269fa81a9004abd193e838a8a22939dfdd050af0da577c01c88444->enter($__internal_b8ac5df2b1269fa81a9004abd193e838a8a22939dfdd050af0da577c01c88444_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "body"));

        // line 12
        echo "    ";
        $this->loadTemplate("@Twig/Exception/exception.html.twig", "@Twig/Exception/exception_full.html.twig", 12)->display($context);
        
        $__internal_b8ac5df2b1269fa81a9004abd193e838a8a22939dfdd050af0da577c01c88444->leave($__internal_b8ac5df2b1269fa81a9004abd193e838a8a22939dfdd050af0da577c01c88444_prof);

    }

    public function getTemplateName()
    {
        return "@Twig/Exception/exception_full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 12,  72 => 11,  58 => 8,  52 => 7,  42 => 4,  36 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@Twig/layout.html.twig' %}

{% block head %}
    <link href=\"{{ absolute_url(asset('bundles/framework/css/exception.css')) }}\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />
{% endblock %}

{% block title %}
    {{ exception.message }} ({{ status_code }} {{ status_text }})
{% endblock %}

{% block body %}
    {% include '@Twig/Exception/exception.html.twig' %}
{% endblock %}
", "@Twig/Exception/exception_full.html.twig", "/home/omanari/workspaceats/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views/Exception/exception_full.html.twig");
    }
}
